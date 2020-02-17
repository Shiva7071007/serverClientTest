import java.io.*;
import java.net.*;
import java.util.*;
 
/**
 * This program demonstrates how to implement a UDP server program.
 *
 *
 * @author www.codejava.net
 */
public class UDPServer {
    private DatagramSocket socket;
    private List<String> listQuotes = new ArrayList<String>();
    private Random random;
 
    public UDPServer(int port) throws SocketException {
        socket = new DatagramSocket(port);
        random = new Random();
    }
 
    public static void main(String[] args) {
        // if (args.length < 1) {
        //     System.out.println("Syntax: UDPServer <port>");
        //     return;
        // }
 
        int port = 6999;
 
        try {
            UDPServer server = new UDPServer(port);
            server.service();
        } catch (SocketException ex) {
            System.out.println("Socket error: " + ex.getMessage());
        } catch (IOException ex) {
            System.out.println("I/O error: " + ex.getMessage());
        }
    }
 
    private void service() throws IOException {
        while (true) {
            DatagramPacket request = new DatagramPacket(new byte[1024], 1024);
            socket.receive(request);
            String req = new String(request.getData());
            System.out.println(req);
 
 
            InetAddress clientAddress = request.getAddress();
            int clientPort = request.getPort();

            System.out.println(request.getAddress() + " : " + request.getPort());

            byte[] buffer = "ok".getBytes();
 
            DatagramPacket response = new DatagramPacket(buffer, buffer.length, clientAddress, clientPort);
            socket.send(response);
        }
    }
 
}