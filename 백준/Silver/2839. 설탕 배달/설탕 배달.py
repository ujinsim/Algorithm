def bag_count(n):
    bag_count = 0
    
    while n >= 0:
        if n % 5 == 0: 
            bag_count += n // 5
            return bag_count
        n -= 3  
        bag_count += 1
    
    return -1  

number = int(input())
print(bag_count(number))
