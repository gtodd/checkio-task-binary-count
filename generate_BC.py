


def checkio(number):
    return 1

#These "asserts" using only for self-checking and not necessary for auto-testing
#if __name__ == '__main__':
#    assert checkio(4) == 1
#    assert checkio(15) == 5
#    assert checkio(1) == 1
#    assert checkio(1022) == 9

from random import randint


def solver(number):
    return bin(number).count("1")

TESTS = [
    4, 15, 1, 1022
]

for _ in range(20):
    T = randint(1, 10000)
    exp = bin(T)[2:]
    ans = solver(T)
    print('{{\n"input": {0},\n"answer": {1},\n"explanation": "{2}"\n}},\n'.format(T, ans, exp))