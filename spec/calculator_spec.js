describe("CalculatorView", function() {

  beforeEach(function() {
    loadFixtures('view-fixture.html');
  });

  it("sets the interest rate", function() {
    view.rate(0.10);
    expect($('#rate')).toHaveText('10.0%');
  });

  it("rounds the interest rate to the nearest tenth", function() {
    view.rate(0.1248);
    expect($('#rate')).toHaveText('12.5%');
  });

  it("sets the monthly payment", function() {
    view.payment(1234.56);
    expect($('#payment')).toHaveText('$1234.56');
  });

  it("rounds the monthly payment to the nearest penny", function() {
    view.payment(1234.56789);
    expect($('#payment')).toHaveText('$1234.57');
  });

  it("reads the principal", function() {
    expect(view.principal()).toBe(15000.00);
  });

  it("reads the months", function() {
    expect(view.months()).toBe(36);
  });

});
