
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 5000,
    years: 3,
    rate: 3.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('146.51');
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 5000,
    years: 1,
    rate: 2.4
  };
  expect(calculateMonthlyPayment(values)).toEqual('422.10');
});

it("should deal with really long loan terms", function() {
  const values = {
    amount: 5000,
    years: 5000,
    rate: 3.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('14.58');
})

/// etc
