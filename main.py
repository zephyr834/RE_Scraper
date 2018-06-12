#!/usr/bin/env python
from Parsing.HouseScraper import HouseScraper

if __name__ == '__main__':
    scraper = HouseScraper()
    house = scraper.scrape_house_url("www.realtor.com")

    