import socket

server = socket.socket()

print("Socket created.")

server.bind(("localhost",9999))

server.listen(3)
print("waiting for connections")

while True:
    client,address = server.accept()
    name = client.recv(1024).decode()
    print("Connected with",address,name)

    client.send(bytes("welcome client","utf-8"))

    client.close()