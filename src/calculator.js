Number.prototype.toPercent = function(places) {
  return (this * 100).toFixed(places) + '%';
};

Number.prototype.toMoney = function() {
  return '$' + this.toFixed(2);
};

String.prototype.toNumber = function() {
  return parseFloat(this);
};

var view = {
  rate : function(val) {
    $('#rate').text(val.toPercent(1));
  },
  payment : function(val) {
    $('#payment').text(val.toMoney());
  },
  principal : function() {
    return $('#principal').val().toNumber();
  },
  months : function() {
    return $('#months').val().toNumber();
  }
};
