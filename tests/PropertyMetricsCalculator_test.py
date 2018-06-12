#!/usr/bin/env python

from Calculations.PropertyMetricsCalculator import PropertyMetricsCalculator
from Parsing.HousePageScraper import HousePageScraper
from nose.tools import *
from Models.House import House

class TestPropertyMetricsCalculatorClass():
    def setUp(self):
        mls_id = 3
        price = 100000
        zip_code = 95101
        beds = 4
        baths = 2
        principal = 405 
        tax_rate = 0.0125
        hoa = 0
        expenses = 0
        sqft = "1500"
        sqft_cost = 108
        self.house = House(mls_id,price,zip_code,beds,baths,principal,tax_rate,hoa,sqft,sqft_cost)
        self.calculator = PropertyMetricsCalculator(1500)

    def teardown(self):
        pass

    def test_cost_assumptions(self):
        assert_equal(self.calculator.calc_cost_assumptions(self.house.price), 109500)

    def test_cash_outlay(self):
        assert_equal(self.calculator.calc_cash_outlay(self.house.price), 29500)

    def test_gross_income(self):
        assert_equal(self.calculator.calc_gross_income(), 16200)

    def test_yearly_expenses(self):
        assert_equal(self.calculator.calc_yearly_expenses(True, self.house.price, 16200), 5215.0)

    def test_cash_flow(self):
        assert_equal(self.calculator.calc_cash_flow(self.house.principal,16200, 5215), 6125)
        #assert_equal(calculator.calculate_cash_roe(self.house.price), 13.49)
    def test_cap_rate(self):
        assert_equal(self.calculator.calc_cap_rate(self.house.price,16200, 5215), 10.985)
        