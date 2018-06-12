#!/usr/bin/env python

from Models.PropertyMetrics import PropertyMetrics

class PropertyMetricsCalculator(object):
    def __init__(self, rent, downpercent=20, interest=4.5, tax_rate=0.015, vacancy_fee=195,
        improvements_percent=0.06,closing_costs_percent=0.035,vacancy_rate=0.1, 
        insurance_percent=0.004,pmt_percent_fee=0.1, yearly_maint=1500):
        self.downpercent = downpercent
        self.interest = interest
        self.rent = rent
        self.tax_rate = tax_rate
        self.vacancy_fee = vacancy_fee
        self.improvements_percent = improvements_percent
        self.closing_costs_percent = closing_costs_percent
        self.vacancy_rate = vacancy_rate
        self.insurance_percent = insurance_percent
        self.pmt_percent_fee = pmt_percent_fee
        self.yearly_maint = yearly_maint


    def calculate_property_metrics(self, house_price, house_principal, pm_used=True):
        metrics = PropertyMetrics()
        metrics.total_cost = calc_cost_assumptions(house_price)
        metrics.cash_outlay = calc_cash_outlay(house_price)
        metrics.gross_income = calc_gross_income(house_price)
        metrics.yearly_expenses = calc_yearly_expenses(pm_used, house_price, gross_income)
        metrics.cash_flow = calc_cash_flow(house_principal, metrics.gross_income, metrics.yearly_expenses)
        metrics.cap_rate = calc_cap_rate(house_price,metrics.gross_income, metrics.yearly_expenses)
        calc_cash_roe(house_price)
        return metrics

    def calc_cost_assumptions(self, house_price):
        improvements = house_price * self.improvements_percent
        closing_costs = house_price * self.closing_costs_percent
        total_cost = house_price + improvements + closing_costs
        return total_cost

    def calc_cash_outlay(self, house_price):
        improvements = house_price * self.improvements_percent
        closing_costs = house_price * self.closing_costs_percent
        downpayment = house_price * self.downpercent / 100
        cash_outlay = downpayment + improvements + closing_costs
        return cash_outlay

    def calc_gross_income(self):
        yearly_rent = self.rent * 12
        loss_value = yearly_rent * self.vacancy_rate
        gross_income = yearly_rent - loss_value
        return gross_income

    def calc_yearly_expenses(self, pm_used, house_price, gross_income):
        tax = house_price * self.tax_rate
        insurance = house_price * self.insurance_percent
        pmt_cost = 0
        if pm_used:
            pmt_cost = gross_income * self.pmt_percent_fee 
        yearly_expenses = tax + insurance + self.yearly_maint + self.vacancy_fee + pmt_cost
        return yearly_expenses

    def calc_cash_flow(self, house_principal, gross_income, yearly_expenses):
        noi = gross_income - yearly_expenses
        yearly_mort = house_principal * 12
        cash_flow = noi - yearly_mort
        return cash_flow

    def calc_cash_roe(self, house_price):
        pass

    def calc_cap_rate(self, house_price, gross_income, yearly_expenses):
        noi = gross_income - yearly_expenses
        cap_rate = noi * 100.0 / house_price 
        return cap_rate