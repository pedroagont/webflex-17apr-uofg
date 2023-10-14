=begin

CHALLENGE 0

At the bottom of this file, create a Calculator class.

Calculator#sum should have one instance method called sum.

It should take in two arguments and return their sum, plain and simple.

=end

class Calculator
    def sum(a, b)
        a + b
    end
end
  
calc = Calculator.new
result = calc.sum(100, 100)

puts result