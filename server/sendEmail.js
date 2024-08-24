import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';
import { fileURLToPath } from 'url';

// Email account credentials
const user = 'eduplore.kelompok8@gmail.com'; // Your company email
const pass = 'meak ihic uatm cjgw'; // Your app password

// Email template file and index
let html_package = 'SignUp.html'; // Name for the HTML template file
let index = 0; // Index that correlates with 'type_of_email'

// Types of email subjects
const type_of_email = [
  'terimakasih telah mendaftar dengan kami!', // Sign-Up
  'terimakasih telah berlangganan dengan SuperCamp', // SuperCamp
  'terimakasih telah berlangganan dengan Super-Exclusive', // Super-Exclusive
  'terimakasih telah berlangganan dengan SuperBoost', // SuperBoost
];

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set recipient-specific data
let recipient_email = 'rhiobimoprakoso.s@gmail.com'; // Temporary recipient address
let recipientData = {
  username: 'Rhio', // Recipient's username
  etc: 'Testing', // Additional data
};

// Function to load and customize the template
function loadTemplate(filePath, data) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }
  let template = fs.readFileSync(filePath, 'utf-8');

  // Replace placeholders with actual data
  for (const key in data) {
    template = template.replace(new RegExp(`{{${key}}}`, 'g'), data[key]);
  }

  return template;
}

// Configure the transporter
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: user,
    pass: pass,
  },
});

// Load and customize the template
const templatePath = path.join(__dirname, 'html_template', html_package);
console.log(`Loading template from: ${templatePath}`);
const customizedHtml = loadTemplate(templatePath, recipientData);

// Email options
let mailOptions = {
  from: user,
  to: recipient_email,
  subject: `Halo ${recipientData.username}, ${type_of_email[index]}`, // Email subject
  html: customizedHtml, // Customized HTML content
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.error('Error sending email:', error);
  }
  console.log('Email sent: ' + info.response);
});
