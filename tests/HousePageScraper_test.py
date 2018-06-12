#!/usr/bin/env python

from Parsing.HouseScraper import HouseScraper
from nose.tools import *

class TestHousePageScraperClass():
    @classmethod
    def setUpClass(self):
        ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
        # self.house_url = "file:///Users/Ninja-Panda/web-scrape/re-scrape/House_XML/tests/2796_Lester/\
# 2796%20S%20Lester%20St%20W,%20West%20Valley%20City,%20UT%2084119%20-%20realtor.com%C2%AE.htm"    
        self.house_url = "file://" + ROOT_DIR + "/House_XML/tests/2796_Lester/\
2796%20S%20Lester%20St%20W,%20West%20Valley%20City,%20UT%2084119%20-%20realtor.com%C2%AE.htm"
        self.scraper = HousePageScraper()
        content = self.scraper.fetch_htm_content(self.house_url)
        self.house = self.scraper.parse_content(content)

    def teardown(self):
        pass

    def test_fetch_htm(self):
        assert_true(self.scraper.fetch_htm())

    def test_parse_house_descrip(self):
        assert_equal(self.house.mls, 1419629)
        assert_equal(self.house.price, 199000)
        assert_equal(self.house.zip, 84119)
        assert_equal(self.house.beds, 4)
        assert_equal(self.house.baths, 2)
        assert_equal(self.house.sqft, "1,836")

    def test_parse_house_expenses(self):
        assert_equal(self.house.tax_rate, 0.0104)
        assert_equal(self.house.principal, 713)
        assert_equal(self.house.tax, 172)
        assert_equal(self.house.hoa, 0)
        assert_equal(self.house.sqft_cost, 108)
