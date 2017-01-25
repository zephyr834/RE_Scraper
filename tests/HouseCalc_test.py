#!/usr/bin/env python

from Calculations.HouseCalc import HouseCalc
from Parsing.HouseScraper import HouseScraper
from nose.tools import *

class TestHouseCalcClass():
    def setUp(self):
        self.house = HouseScraper()
        self.house.price = 100000
        self.house.zip = 95101
        self.house.beds = 4
        self.house.baths = 2
        self.house.principal = 405 
        self.house.tax = 125
        self.house.hoa = 0
        self.house.expenses = 0
        self.house.sqft_cost = 108
        self.house_calc = HouseCalc(self.house)

    def teardown(self):
        pass

    def test_cost_assumptions(self):
        assert_equal(self.house_calc.total_cost, 10800)

    def test_cash_outlay(self):
        assert_equal(self.house_calc.cash_outlay, 28000)

    def test_gross_income(self):
        assert_equal(self.house_calc.gross_income, 12855)

    def test_total_expenses(self):
        assert_equal(self.house_calc.total_expenses, 12855)


    def test_cash_flow(self):
        assert_equal(self.house_calc.cash_flow, 3776)
        assert_equal(self.house_calc.cash_roi, 13.49)
        assert_equal(self.house_calc.cap_rate, 8.6)
        