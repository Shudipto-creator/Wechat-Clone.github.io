import React from 'react';
import { MessageSquare, Users, Compass, UserCircle, MessageCircle } from 'lucide-react';

const chatData = [
  {
    name: "Alex Thompson",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces",
    lastMessage: "Hey, are we still meeting today?",
    time: "12:01"
  },
  {
    name: "Sarah Chen",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces",
    lastMessage: "The presentation looks great! 👍",
    time: "11:45"
  },
  {
    name: "Mike Rodriguez",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
    lastMessage: "Thanks for your help yesterday",
    time: "10:30"
  },
  {
    name: "Emma Wilson",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    lastMessage: "Did you see the latest updates?",
    time: "09:15"
  },
  {
    name: "James Liu",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    lastMessage: "Let's catch up soon!",
    time: "Yesterday"
  }
];

function App() {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-[#2BA245] text-white p-4 sm:p-5 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center space-x-2">
          <MessageCircle size={28} className="text-white" />
          <h1 className="text-xl font-semibold">WeChat</h1>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-sm font-medium hidden sm:block">Sudipta Roy</span>
          <button className="p-2 hover:bg-[#248c3a] rounded-full transition-colors">
            <UserCircle size={24} />
          </button>
        </div>
      </header>

      {/* Main Content - Chat List */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto">
          {chatData.map((chat, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 bg-white hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-100 sm:rounded-lg sm:m-2"
            >
              <div className="relative flex-shrink-0">
                <img
                  src={chat.image}
                  alt={chat.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover shadow-sm"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(chat.name)}&background=random`;
                  }}
                />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-gray-900 truncate">{chat.name}</h3>
                  <span className="text-xs text-gray-500 flex-shrink-0 ml-2">{chat.time}</span>
                </div>
                <p className="text-sm text-gray-500 truncate mt-1">
                  {chat.lastMessage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-[#F7F7F7] border-t border-gray-200 sticky bottom-0">
        <div className="flex justify-around max-w-2xl mx-auto">
          <button className="flex flex-col items-center p-3 sm:p-4 text-[#2BA245] flex-1 hover:bg-gray-100 transition-colors">
            <MessageSquare size={24} />
            <span className="text-xs mt-1">Chats</span>
          </button>
          <button className="flex flex-col items-center p-3 sm:p-4 text-gray-600 flex-1 hover:bg-gray-100 transition-colors">
            <Users size={24} />
            <span className="text-xs mt-1">Contacts</span>
          </button>
          <button className="flex flex-col items-center p-3 sm:p-4 text-gray-600 flex-1 hover:bg-gray-100 transition-colors">
            <Compass size={24} />
            <span className="text-xs mt-1">Discover</span>
          </button>
          <button className="flex flex-col items-center p-3 sm:p-4 text-gray-600 flex-1 hover:bg-gray-100 transition-colors">
            <UserCircle size={24} />
            <span className="text-xs mt-1">Me</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default App;