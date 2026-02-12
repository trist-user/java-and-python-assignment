lets = ["a","e","i","o","u"]
def vowelcheck(st,vows):
    v = 0
    for i in st:
        if i in vows:
            v+=1
    print(v)

x= input("gimme word").upper() # nah trust, python isn't case sensitive
vowelcheck(x, lets)