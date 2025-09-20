export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">About Me</h1>
      
      <div className="prose prose-lg max-w-none">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">
            Experienced Application Support/Software Engineer with a strong background in VAS (Value-Added Services), 
            backend development, system integration, and server management. At Nalo Solutions, I design and 
            implement scalable content delivery platforms that power services across SMS, USSD, and longcode 
            channels, ensuring performance, reliability, and user engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Technical Expertise</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Node.js & React Development</li>
              <li>• MariaDB & Database Management</li>
              <li>• Nginx & Bitnami Stacks</li>
              <li>• AWS Infrastructure</li>
              <li>• API Development & Integration</li>
              <li>• Linux/Windows/macOS Administration</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Specializations</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Telecom VAS Solutions</li>
              <li>• SMS & USSD Integration</li>
              <li>• System Monitoring & Automation</li>
              <li>• Content Delivery Platforms</li>
              <li>• Real-time Notifications</li>
              <li>• FRP Bypass Solutions</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Current Role at Nalo Solutions</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            I specialize in Node.js and work extensively with MariaDB, Nginx, Bitnami stacks, and AWS infrastructure. 
            I develop APIs that integrate with telcos (like Airtel) and build tools to automate reporting, monitoring, 
            and log analysis—enabling faster decision-making and improved service uptime.
          </p>
          <p className="text-gray-700 leading-relaxed">
            From scheduling content to pushing real-time notifications based on user status (active, inactive), 
            I blend technical execution with operational efficiency. Beyond backend work, I contribute to system 
            monitoring, client support, FRP bypass solutions, Linux/Windows/macOS installations, and hardware setups.
          </p>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Philosophy & Approach</h3>
          <p className="text-gray-700 leading-relaxed">
            Driven by continuous learning and a problem-solving mindset, I enjoy creating tools that simplify 
            workflows and align tech solutions with business goals. Whether it's integrating USSD flows or 
            building robust message delivery tracking for reporting, I take pride in ensuring things work 
            well—and work smart.
          </p>
        </div>
      </div>
    </div>
  );
}
