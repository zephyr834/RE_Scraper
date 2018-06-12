#!/usr/bin/env python

import urllib2
import httplib2
import 
from BeautifulSoup import BeautifulSoup

class PageNotFound(RuntimeError): pass

class HousePageScraper(object):
    def __init__(self, timeout=120):
        self.timeout = int(timeout)

    #This function is used for live websites (not downloaded ones)
    def fetch_url_content(self, url):
        http = httplib2.Http(timeout=self.timeout)
        headers, content = http.request(url)

        if headers.get('status') != '200':
            raise PageNotFound("Could not fetch house from '%s'. Got %s." % (url, headers['status']))

        return content

    def fetch_htm_content(self, htm):
        content = urllib2.urlopen(htm).read()
        return content

    def parse_content(self, content):
        content = BeautifulSoup(content)
        mls = int(self.soup.find('td', itemprop='productID').text)
        price = int(self.soup.find('span', itemprop="price").get('content'))
        zip_code = int(self.soup.find('span', itemprop="postalCode").text)
        sqft = self.soup.find('li', "property-meta-block", 'span').text[:5]
        beds = int(self.soup.find('li', {"data-label" : "property-meta-beds"}).text[0])
        baths = int(self.soup.find('li', {"data-label" : "property-meta-baths"}).text[0])
        tax_rate = float(self.soup.find('input', id="property_tax").get('data-rate'))
        sqft_cost = int(self.soup.find('li', {"data-label" : "property-sqft"}).text[-3:])
        principal = int(self.soup.find('span', id="principle_interest").text[1:])
        house = new House(mls, price, zip_code, beds, baths, principal, tax_rate, hoa, sqft, sqft_cost)
        return house

    def scrape_house_url(self, url):
        content = fetch_house_content(url)
        return parse_content(content)

    #TODO: Change to pass array of file location
    def scrape_house_file(self, htm):
        content = fetch_htm_content(htm)
        return parse_content(content)

