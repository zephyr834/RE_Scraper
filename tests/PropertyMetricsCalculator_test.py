#!/usr/bin/env python

from Calculations.HouseCalc import HouseCalc
from Parsing.HouseScraper import HouseScraper
from nose.tools import *

class TestPropertyMetricsCalculatorClass():
    @classmethod
    def setUpClass(self):
        self.house = HouseScraper()
        self.house.price = 100000
        self.house.zip = 95101
        self.house.beds = 4
        self.house.baths = 2
        self.house.principal = 417
        self.house.hoa = 0
        self.house.expenses = 0
        self.house.sqft_cost = 108
        interest_rate = 4.75
        down_pay = 20
        tax_rate = 0.015
        self.house_calc = HouseCalc(self.house, 1200, down_pay, interest_rate, tax_rate)

    def teardown(self):
        pass

    def test_cost_assumptions(self):
        self.house_calc.calc_cost_assumptions()
        assert_equal(self.house_calc.total_cost, 109500)

    def test_cash_outlay(self):
        self.house_calc.calc_cash_outlay()
        assert_equal(self.house_calc.cash_outlay, 29500)

    def test_gross_income(self):
        self.house_calc.calc_gross_income()
        assert_equal(self.house_calc.gross_income, 12960)

    def test_total_expenses(self):
        pmt_used = True
        maintenance = 1500 # $$
        pmt_fee = 0.1 # percentage
        self.house_calc.calc_yearly_expenses(pmt_used, pmt_fee, maintenance)
        assert_equal(self.house_calc.yearly_expenses, 4891)

    def test_cash_flow(self):
        self.house_calc.calc_gross_income()
        self.house_calc.calc_yearly_expenses(True)
        self.house_calc.calc_cash_flow()
        assert_equal(self.house_calc.cash_flow, 3061)

    def test_cash_roi(self):
        assert_equal(self.house_calc.cash_roi, 10.57)

    def test_cap_rate(self):
        self.house_calc.calc_gross_income()
        self.house_calc.calc_yearly_expenses(True)
        self.house_calc.calc_cap_rate()
        assert_equal(int(self.house_calc.cap_rate), 8)
        