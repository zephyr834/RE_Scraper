#!/usr/bin/env python

class House(object):

	def __init__(self,mls=0,price=0,zip_code=0,beds=0,baths=0,principal=0,tax_rate=0,hoa=0,sqft="", sqft_cost=0):
		self.mls = mls
        self.price = price
        self.zip = zip_code
        self.beds = beds
        self.baths = baths
        self.principal = principal
        self.tax_rate = tax_rate
        self.hoa = hoa
        self.sqft = sqft
        self.sqft_cost = sqft_cost



