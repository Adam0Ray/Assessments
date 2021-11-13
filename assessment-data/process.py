log_file = open("um-server-01.txt")
#open file to be used in process.py

def sales_reports(log_file):    #create function sales_reports with log_file as the parameter
    for line in log_file:    #create for loop
        line = line.rstrip()  # assign line to strip away white spaces at the end of string
        day = line[0:3] #create variable day, assign it to line at index 0 and 3 characters
        # print(day)
        if day == "Mon": #if statement if the day is equal to Tue, do something
            print(line)    #print line if above if statement is met

sales_reports(log_file) #prints all lines which occured on the day of the week indicated on line 9


def sales_melons(log_file):
    for line in log_file:
        index = line.rsplit() #split into multiple indexes for every space
        amount = int(index[2]) #select the integer at index 2 from rsplit above
        if amount > 10:           #if amount order >10
            print(line)          #print the line
sales_melons(log_file)            #call function
