import socket

server = socket.socket()

print("Socket created.")

server.bind(("localhost",9999))

server.listen(1)
print("waiting for connections")

while True:
    client,address = server.accept()
    name = client.recv(1024).decode()
    print("Connected with",address,name)

    client.send(bytes("welcome"+name,"utf-8"))

    client.close()