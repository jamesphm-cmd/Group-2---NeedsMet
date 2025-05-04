
import 'package:flutter/material.dart';

void main() => runApp(NeedsMetApp());

class NeedsMetApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'NeedsMet',
      initialRoute: '/',
      routes: {
        '/': (context) => HomeScreen(),
        '/details': (context) => DetailsScreen(),
      },
    );
  }
}

// ---------------- HomeScreen ----------------
class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 1,
        leading: IconButton(
          icon: Icon(Icons.notifications, color: Colors.black),
          onPressed: () {},
        ),
        title: Text(
          'AVAILABLE RQUESTS',
          style: TextStyle(
            color: Colors.black,
            fontWeight: FontWeight.bold,
            fontSize: 18,
          ),
        ),
        centerTitle: true,
        actions: [
          Row(
            children: [
              Icon(Icons.battery_full, color: Colors.black),
              SizedBox(width: 5),
              Text('68%', style: TextStyle(color: Colors.black)),
              SizedBox(width: 10),
            ],
          ),
        ],
      ),
      body: ListView(
        padding: EdgeInsets.all(16),
        children: List.generate(4, (index) {
          return GestureDetector(
            onTap: () {
              Navigator.pushNamed(context, '/details');
            },
            child: Padding(
              padding: const EdgeInsets.only(bottom: 16.0),
              child: RequestCard(user: 'USER ${index + 1}'),
            ),
          );
        }),
      ),
    );
  }
}

// ---------------- DetailsScreen ----------------
class DetailsScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Request Details'),
        leading: IconButton(
          icon: Icon(Icons.arrow_back),
          onPressed: () => Navigator.pop(context),
        ),
      ),
      body: Center(
        child: Text(
          'Details about the selected request.',
          style: TextStyle(fontSize: 18),
        ),
      ),
    );
  }
}

// ---------------- RequestCard Widget ----------------
class RequestCard extends StatelessWidget {
  final String user;

  RequestCard({required this.user});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(12),
      color: Colors.grey[300],
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Icon(Icons.person),
              SizedBox(width: 8),
              Text(user),
            ],
          ),
          SizedBox(height: 4),
          Text('RATINGS'),
          Row(
            children: List.generate(5, (index) => Icon(Icons.star_border)),
          ),
        ],
      ),
    );
  }
}
