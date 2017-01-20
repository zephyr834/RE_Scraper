#!/usr/bin/env python

import urllib2
import httplib2
from BeautifulSoup import BeautifulSoup

class PageNotFound(RuntimeError): pass

class HouseScraper(object):
    def __init__(self, url="",timeout=120):
        self.timeout = int(timeout)
        self.url = url
        self.mls = 0
        self.price = 0
        self.zip = 0
        self.beds = ""
        self.baths = ""
        self.principal = 0
        self.tax = 0
        self.hoa = 0
        self.expenses = 0
        self.sqft = ""
        self.sqft_cost = 0

    def fetch_house(self):
        http = httplib2.Http(timeout=self.timeout)
        headers, content = http.request(self.url)

        if headers.get('status') != '200':
            raise PageNotFound("Could not fetch house from '%s'. Got %s." % (self.url, headers['status']))

        return content

    def fetch_htm(self):
        content = urllib2.urlopen(self.url).read()
        return content

    def parse_house(self, content):
        self.soup = BeautifulSoup(content)
        self.set_house_attr()
        self.set_house_expenses()
        return self

    def set_house_attr(self):
        self.mls = int(self.soup.find('td', itemprop='productID').text)
        self.price = int(self.soup.find('span', itemprop="price").get('content'))
        self.zip = int(self.soup.find('span', itemprop="postalCode").text)
        self.sqft = self.soup.find('li', "property-meta-block", 'span').text[:5]
        self.beds = int(self.soup.find('li', {"data-label" : "property-meta-beds"}).text[0])
        self.baths = int(self.soup.find('li', {"data-label" : "property-meta-baths"}).text[0])

    def set_house_expenses(self):
        self.tax_rate = 0.0102 #int(self.soup.find('input', "data-rate").value)
        self.sqft_cost = int(self.soup.find('li', {"data-label" : "property-sqft"}).text[-3:])
        self.principal = int(self.soup.find('span', id="principle_interest").text[1:])
        self.tax = int(self.price * self.tax_rate / 12)


    def get_house(self, url):
        self.url = url
        content = self.fetch_house()
        return self.parse_house(content)

    def get_house_htm(self, url):
        self.url = url
        content = self.fetch_htm()
        return self.parse_house(content)

