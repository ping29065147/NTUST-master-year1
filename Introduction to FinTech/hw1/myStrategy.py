def myStrategy(pastPriceVec, currentPrice):
	# Explanation of my approach:
	# 1. Technical indicator used: RSI
	# 2. if RSI > alpha ==> buy
	#    if RSI < beta ==> sell
	# 3. Modifiable parameters: alpha, beta, and windowSize for RSI
	# 4. Use exhaustive search to obtain these parameter values (as shown in bestParamByExhaustiveSearch.py)
	
	import numpy as np

	# set best parameters for RSI
	windowSize = 13
	alpha = 22
	beta = 83

	# action=1(buy), -1(sell), 0(hold), with 0 as the default action
	action = 0
	if len(pastPriceVec) + 1 < windowSize:
		return action

	# combine n - 1 days past price and current price in days_npastPriceVec
	days_npastPriceVec = pastPriceVec[-(windowSize - 1):]
	days_npastPriceVec = np.append(days_npastPriceVec, currentPrice)
	
	# compute RSI
	Increase = 0; Decrease = 0
	Increase_cnt = 0; Decrease_cnt = 0

	for i in range(1, windowSize):
		if (days_npastPriceVec[i] > days_npastPriceVec[i - 1]):
			Increase += days_npastPriceVec[i] - days_npastPriceVec[i - 1]
			Increase_cnt += 1
		else:
			Decrease += days_npastPriceVec[i - 1] - days_npastPriceVec[i]
			Decrease_cnt += 1

	if Increase_cnt != 0:
		Increase /= Increase_cnt
	if Decrease_cnt != 0:
		Decrease /= Decrease_cnt

	RSI = Increase / (Increase + Decrease) * 100

	# Determine action
	if RSI < alpha:		# If RSI < alpha ==> buy
		action = 1
	elif RSI > beta:	# If RSI > beta ==> sell
		action = -1

	return action
