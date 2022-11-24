import socket

client = socket.socket()

client.connect(("localhost",9999))

name = input("enter your name")
client.send(name.encode())

print(client.recv(1024).decode())