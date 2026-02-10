x = int(input("gimme a positive number"))
y = 1
i = 1
while i <= x:
    for z in range(1):
        y*=i
        i+=1
print(y)