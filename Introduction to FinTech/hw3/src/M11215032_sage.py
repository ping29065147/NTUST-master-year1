import hashlib

# secp256k1 standard
p = 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f
K = GF(p)
a = K(0x0000000000000000000000000000000000000000000000000000000000000000)
b = K(0x0000000000000000000000000000000000000000000000000000000000000007)
E = EllipticCurve(K, (a, b))
G = E(0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798, 0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8)
E.set_order(0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141 * 0x1)
n = 0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141
Fn = FiniteField(n)


print("G = ", G)
print()

print("1. 4G = ", 4*G)

print("2. 5G = ", 5*G)

d = 5032 # private key
Q = d * G
print("3. Q = d*G = ", Q)

cnt_double = 0
cnt_add = 0
d2 = d
while(d2 > 1):
    cnt_add += (d2 % 2)
    cnt_double += 1
    d2 >>= 1
print("4. d = 5032, Doubles = ", cnt_double, ", Additions = ", cnt_add)

# 4096 + 512 + 256 + 128 + 32 + 8
# (5032)10 = (1001110101000)2
# 5032 2516 1258 629 628- 314 157 156- 78 39 38- 19 18- 9 8- 4 2 1

def hashit(msg):
    return Integer('0x' + hashlib.sha256(msg.encode()).hexdigest())

def ecdsa_sign(d, m):
    r = 0
    s = 0
    while s == 0:
        k = 1
        while r == 0:
            k = randint(1, n - 1)
            Q = k * G
            (x1, y1) = Q.xy()
            r = Fn(x1)
        e = hashit(m)
        s = Fn(k) ^ (-1) * (e + d * r)
    return [r, s]

def ecdsa_verify(Q, m, r, s):
    e = hashit(m)
    w = s ^ (-1)
    u1 = (e * w)
    u2 = (r * w)
    P1 = Integer(u1) * G
    P2 = Integer(u2) * Q
    X = P1 + P2
    (x, y) = X.xy()
    v = Fn(x)
    return v == r

m = "Hello" # message

[r, s] = ecdsa_sign(d, m)
print("6. signature (r, s) = (", r, ", ", s, ")")

result = ecdsa_verify(Q, m, r, s)
print("7. Verification =", result)

var('a b c')
eq1 = a + b + c == 10
eq2 = 4*a + 2*b + c == 20
eq3 = 9*a + 3*b + c == 5032
print("8. p(1) = 10, p(2) = 20, and p(3) = d: ")
solve([eq1, eq2, eq3], a, b, c)
