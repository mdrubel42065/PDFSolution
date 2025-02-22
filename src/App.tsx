import React from 'react';
import { 
  FileUp, 
  FileMinus, 
  FileText, 
  FileImage, 
  FileLock2, 
  FileSignature,
  SplitSquareHorizontal,
  Merge,
  RotateCw,
  ChevronRight
} from 'lucide-react';

interface ToolCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ icon, title, description }) => (
  <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200 hover:-translate-y-1">
    <div className="flex flex-col items-center text-center">
      <div className="text-blue-600 mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="text-blue-600 flex items-center text-sm font-medium">
          Try now <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  </div>
);

function App() {
  const tools = [
    {
      icon: <Merge className="w-8 h-8" />,
      title: "Merge PDF",
      description: "Combine multiple PDFs into one file"
    },
    {
      icon: <SplitSquareHorizontal className="w-8 h-8" />,
      title: "Split PDF",
      description: "Separate one PDF into multiple files"
    },
    {
      icon: <FileMinus className="w-8 h-8" />,
      title: "Compress PDF",
      description: "Reduce file size while maintaining quality"
    },
    {
      icon: <FileImage className="w-8 h-8" />,
      title: "PDF to Image",
      description: "Convert PDF to JPG, PNG or TIFF"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "PDF to Word",
      description: "Convert PDF to editable Word document"
    },
    {
      icon: <FileLock2 className="w-8 h-8" />,
      title: "Protect PDF",
      description: "Encrypt PDF with a password"
    },
    {
      icon: <RotateCw className="w-8 h-8" />,
      title: "Rotate PDF",
      description: "Rotate PDF pages easily"
    },
    {
      icon: <FileSignature className="w-8 h-8" />,
      title: "Sign PDF",
      description: "Add digital signature to PDF"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-[Inter]">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <FileText className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">PDF Tools</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#tools" className="text-gray-600 hover:text-blue-600">Tools</a>
              <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-blue-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Transform Your PDFs with Powerful Tools
            </h1>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Every tool you need to use PDFs, at your fingertips. All are 100% FREE and easy to use!
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="flex flex-col items-center justify-center space-y-4">
                <FileUp className="w-12 h-12 text-blue-600" />
                <p className="text-gray-700 text-lg">Drop your files here or click to browse</p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300">
                  Choose Files
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">All PDF Tools</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Choose from our complete set of PDF tools to handle any task. Simple, powerful, and free.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <ToolCard
              key={index}
              icon={tool.icon}
              title={tool.title}
              description={tool.description}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our PDF Tools?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Experience the perfect blend of power and simplicity with our PDF tools</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileUp className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Easy to Use</h3>
              <p className="text-gray-600">Simple drag and drop interface for all your PDF needs. No technical expertise required.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileLock2 className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">100% Secure</h3>
              <p className="text-gray-600">Your files are automatically deleted after 2 hours. We never store your sensitive data.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">High Quality</h3>
              <p className="text-gray-600">Advanced algorithms ensure the highest quality output for all your PDF operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h4 className="text-lg font-semibold mb-6">PDF Tools</h4>
              <ul className="space-y-3">
                {tools.slice(0, 4).map((tool, index) => (
                  <li key={index} className="hover:text-blue-400 cursor-pointer transition-colors duration-200">
                    {tool.title}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                <li className="hover:text-blue-400 cursor-pointer transition-colors duration-200">About Us</li>
                <li className="hover:text-blue-400 cursor-pointer transition-colors duration-200">Features</li>
                <li className="hover:text-blue-400 cursor-pointer transition-colors duration-200">Privacy Policy</li>
                <li className="hover:text-blue-400 cursor-pointer transition-colors duration-200">Terms of Service</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Support</h4>
              <ul className="space-y-3">
                <li className="hover:text-blue-400 cursor-pointer transition-colors duration-200">Help Center</li>
                <li className="hover:text-blue-400 cursor-pointer transition-colors duration-200">Contact Us</li>
                <li className="hover:text-blue-400 cursor-pointer transition-colors duration-200">FAQ</li>
                <li className="hover:text-blue-400 cursor-pointer transition-colors duration-200">Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Follow Us</h4>
              <ul className="space-y-3">
                <li className="hover:text-blue-400 cursor-pointer transition-colors duration-200">Twitter</li>
                <li className="hover:text-blue-400 cursor-pointer transition-colors duration-200">Facebook</li>
                <li className="hover:text-blue-400 cursor-pointer transition-colors duration-200">LinkedIn</li>
                <li className="hover:text-blue-400 cursor-pointer transition-colors duration-200">Instagram</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">&copy; 2024 PDF Tools. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;