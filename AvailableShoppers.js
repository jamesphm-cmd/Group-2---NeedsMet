import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class JSShoppersRating extends JFrame {

    private static final int STAR_COUNT = 5;
    private final JLabel[][] stars = new JLabel[4][STAR_COUNT];

    public JSShoppersRating() {
        setTitle("NeedsMet UI 7");
        setSize(400, 600);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setLayout(new BorderLayout());

        // Status bar at the top
        JPanel statusBar = new JPanel(new BorderLayout());
        statusBar.setBackground(Color.DARK_GRAY);
        JLabel left = new JLabel("  NEEDSMET UI 7");
        left.setForeground(Color.LIGHT_GRAY);
        JLabel right = new JLabel("68% ⚡   11:52  ");
        right.setForeground(Color.LIGHT_GRAY);
        statusBar.add(left, BorderLayout.WEST);
        statusBar.add(right, BorderLayout.EAST);
        add(statusBar, BorderLayout.NORTH);

        // Main content
        JPanel mainPanel = new JPanel();
        mainPanel.setLayout(new BoxLayout(mainPanel, BoxLayout.Y_AXIS));

        JLabel title = new JLabel("AVAILABLE SHOPPERS", SwingConstants.CENTER);
        title.setFont(new Font("Arial", Font.BOLD, 18));
        title.setAlignmentX(Component.CENTER_ALIGNMENT);
        title.setBorder(BorderFactory.createEmptyBorder(15, 0, 15, 0));
        mainPanel.add(title);

        String[] users = {"User 1", "User 2", "User 3", "User 4"};

        for (int i = 0; i < users.length; i++) {
            JPanel userPanel = new JPanel();
            userPanel.setLayout(new BoxLayout(userPanel, BoxLayout.Y_AXIS));
            userPanel.setBackground(Color.LIGHT_GRAY);
            userPanel.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));
            userPanel.setMaximumSize(new Dimension(350, 100));

            JLabel nameLabel = new JLabel("\uD83D\uDC64 " + users[i]);
            nameLabel.setFont(new Font("Arial", Font.BOLD, 14));
            JLabel ratingLabel = new JLabel("RATINGS");

            JPanel starPanel = new JPanel();
            starPanel.setBackground(Color.LIGHT_GRAY);

            for (int j = 0; j < STAR_COUNT; j++) {
                JLabel star = new JLabel("☆");
                star.setFont(new Font("Serif", Font.PLAIN, 24));
                star.setForeground(Color.BLACK); // Default color for empty stars
                final int starIndex = j;
                final int userIndex = i;

                star.addMouseListener(new MouseAdapter() {
                    public void mouseClicked(MouseEvent e) {
                        updateStars(userIndex, starIndex);
                    }
                    // Optional: Add mouse entered/exited for hover effect
                    public void mouseEntered(MouseEvent e) {
                        // You could add a temporary highlight here
                    }
                    public void mouseExited(MouseEvent e) {
                        // Remove temporary highlight
                    }
                });

                stars[i][j] = star;
                starPanel.add(star);
            }

            userPanel.add(nameLabel);
            userPanel.add(ratingLabel);
            userPanel.add(starPanel);
            userPanel.setAlignmentX(Component.CENTER_ALIGNMENT);
            mainPanel.add(userPanel);
            mainPanel.add(Box.createVerticalStrut(10));
        }

        JScrollPane scrollPane = new JScrollPane(mainPanel);
        add(scrollPane, BorderLayout.CENTER);
    }

    private void updateStars(int user, int rating) {
        for (int i = 0; i < STAR_COUNT; i++) {
            if (i <= rating) {
                stars[user][i].setText("★"); // Filled star
                stars[user][i].setForeground(Color.YELLOW); // Color for filled stars
            } else {
                stars[user][i].setText("☆"); // Empty star
                stars[user][i].setForeground(Color.BLACK); // Color for empty stars
            }
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            JSShoppersRating frame = new JSShoppersRating();
            frame.setVisible(true);
        });
    }
}