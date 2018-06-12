#!/usr/bin/env python

class PropertyMetricsCalculator(object):
    def __init__(self, house, rent, downpercent=20, interest=4.5, tax_rate=0.015):
        self.house = house
        self.total_cost = 0
        self.cash_outlay = 0
        self.gross_income = 0
        self.yearly_expenses = 0
        self.cash_flow = 0
        self.cash_roi = 0
        self.cap_rate = 0.00
        self.tax = 0
        self.downpercent = downpercent
        self.interest = interest
        self.rent = rent
        self.tax_rate = tax_rate

    def calc_cost_assumptions(self):
        improvements = self.house.price * 0.06
        closing_costs = self.house.price * 0.035
        self.total_cost = self.house.price + improvements + closing_costs

    def calc_cash_outlay(self):
        downpayment = self.house.price * self.downpercent / 100
        improvements = self.house.price * 0.06
        closing_costs = self.house.price * 0.035
        self.cash_outlay = downpayment + improvements + closing_costs

    def calc_gross_income(self):
        yearly_rent = self.rent * 12
        vacancy_rate = 0.1
        loss_value = yearly_rent * vacancy_rate
        self.gross_income = yearly_rent - loss_value

    def calc_yearly_expenses(self, pm_used=True, pmt_percent_fee=0.1, yearly_maint = 1500):
        tax = self.house.price * self.tax_rate
        insurance = self.house.price * 0.004
        fill_vacancy = 195 #this number is the flat cost for PMT to fill the house
        if pm_used:
            pmt_cost = self.gross_income * pmt_percent_fee 
        self.yearly_expenses = tax + insurance + yearly_maint + fill_vacancy + pmt_cost

    def calc_cash_flow(self):
        noi = self.gross_income - self.yearly_expenses
        yearly_mort = self.house.principal * 12
        self.cash_flow = noi - yearly_mort

    def calc_cash_roi(self):
        pass

    def calc_cap_rate(self):
        noi = self.gross_income - self.yearly_expenses
        self.cap_rate = noi / self.house.price * 100