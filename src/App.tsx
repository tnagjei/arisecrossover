import React from 'react';
import { Gift, Clock, Copy, CheckCircle2, AlertCircle, ArrowRight, ExternalLink, Smartphone, Globe, GamepadIcon, Twitter, Instagram, Youtube, Bell } from 'lucide-react';

function App() {
  const [copiedCode, setCopiedCode] = React.useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Arise Crossover Codes and Rewards (March 2024)
          </h1>
          <p className="mt-2 text-gray-600">
            Complete list of active Arise Crossover redeem codes with instant rewards
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Active Codes Section */}
        <section className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Gift className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-900">Latest Arise Crossover Codes</h2>
          </div>

          <p className="text-gray-700 mb-6">
            These Arise Crossover codes are verified and working as of March 2024. Redeem them quickly to get free gems, coins, and exclusive rewards in your favorite cross-platform adventure game.
          </p>

          <div className="space-y-4">
            <CodeCard
              code="ARISE2024"
              reward="500 Arise Crossover Gems + 10 Premium Tickets"
              isNew={true}
              onCopy={handleCopyCode}
              isCopied={copiedCode === "ARISE2024"}
            />
            <CodeCard
              code="MARCHUPDATE"
              reward="1000 Arise Crossover Coins + Limited Character Skin"
              isNew={true}
              onCopy={handleCopyCode}
              isCopied={copiedCode === "MARCHUPDATE"}
            />
            <CodeCard
              code="THANKYOU500K"
              reward="Exclusive Arise Crossover Avatar Frame + 200 Gems"
              isNew={false}
              onCopy={handleCopyCode}
              isCopied={copiedCode === "THANKYOU500K"}
            />
          </div>
        </section>

        {/* How to Get More Codes Section */}
        <section className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Bell className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-900">Get More Arise Crossover Codes</h2>
          </div>

          <p className="text-gray-700 mb-6">
            Stay updated with the latest Arise Crossover codes through these official channels and never miss out on exclusive rewards.
          </p>

          <div className="space-y-8">
            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Official Arise Crossover Social Media</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a href="#" className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <Twitter className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-blue-900">Twitter/X</p>
                    <p className="text-sm text-blue-700">@AriseCrossover</p>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors">
                  <Instagram className="w-5 h-5 text-pink-600" />
                  <div>
                    <p className="font-medium text-pink-900">Instagram</p>
                    <p className="text-sm text-pink-700">@arisecrossover.official</p>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                  <Youtube className="w-5 h-5 text-red-600" />
                  <div>
                    <p className="font-medium text-red-900">YouTube</p>
                    <p className="text-sm text-red-700">Arise Crossover Official</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Other Sources */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Arise Crossover Code Sources</h3>
              <div className="grid gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Arise Crossover In-Game Events</h4>
                  <p className="text-gray-700">Special events in Arise Crossover often reward players with exclusive redemption codes. Check the Events tab daily for new opportunities to earn premium rewards.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Official Arise Crossover Discord</h4>
                  <p className="text-gray-700">Join the official Arise Crossover Discord server to receive instant code announcements and participate in community events where exclusive codes are shared.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Arise Crossover Livestreams</h4>
                  <p className="text-gray-700">Watch official Arise Crossover livestreams on YouTube and Twitch for exclusive codes revealed during special broadcasts and community events.</p>
                </div>
              </div>
            </div>

            {/* Pro Tips */}
            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-indigo-900 mb-4">Pro Tips for Arise Crossover Codes</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                  <p className="text-indigo-800">Enable notifications on Arise Crossover social media to never miss new code announcements</p>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                  <p className="text-indigo-800">Check during major Arise Crossover updates for special celebration codes</p>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                  <p className="text-indigo-800">Visit our Arise Crossover codes page daily for the latest working codes</p>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                  <p className="text-indigo-800">Join Arise Crossover community events for exclusive code rewards</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Redeem Section */}
        <section className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Redeem Arise Crossover Codes</h2>
          
          <p className="text-gray-700 mb-6">
            Follow these simple steps to redeem your Arise Crossover codes and claim your rewards instantly.
          </p>

          {/* Platform Tabs */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Choose Your Arise Crossover Platform</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Smartphone className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-blue-900">Mobile (iOS/Android)</span>
                </div>
                <p className="text-sm text-blue-800">Most popular platform for Arise Crossover</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-5 h-5 text-purple-600" />
                  <span className="font-semibold text-purple-900">PC (Steam)</span>
                </div>
                <p className="text-sm text-purple-800">Play Arise Crossover on Steam</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <GamepadIcon className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-900">Console</span>
                </div>
                <p className="text-sm text-green-800">PlayStation and Xbox versions</p>
              </div>
            </div>
          </div>

          {/* Redemption Steps */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Arise Crossover Code Redemption Steps</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                  1
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Launch Arise Crossover</p>
                  <p className="text-sm text-gray-600 mt-1">Ensure your game is updated to the latest version</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                  2
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Log into your Arise Crossover account</p>
                  <p className="text-sm text-gray-600 mt-1">Ensure you're connected to the internet</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                  3
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Open the Arise Crossover Code Redemption menu</p>
                  <p className="text-sm text-gray-600 mt-1">Click your profile icon → Settings → Redeem Code</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                  4
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Enter your Arise Crossover code</p>
                  <p className="text-sm text-gray-600 mt-1">Type or paste the code exactly as shown (codes are case-sensitive)</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                  5
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Claim your Arise Crossover rewards</p>
                  <p className="text-sm text-gray-600 mt-1">Click "Redeem" and check your in-game mailbox</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Code Update Info */}
        <section className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Clock className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Arise Crossover Code Updates</h2>
          </div>
          <p className="text-gray-700 mb-4">
            We update this page daily with new Arise Crossover codes. Most codes expire after 1-2 weeks, so make sure to redeem them quickly to claim your free rewards!
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <p className="text-blue-800">
                Last updated: March 19, 2024. Check back daily for new Arise Crossover codes!
              </p>
            </div>
          </div>
        </section>

        {/* Game Info */}
        <section className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About Arise Crossover</h2>
          <p className="text-gray-700 mb-4">
            Arise Crossover is an exciting cross-platform adventure game that brings together characters from various universes. Players can collect heroes, participate in epic battles, and earn rewards through regular events and code redemptions. The game has gained massive popularity for its engaging gameplay and generous reward system.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Arise Crossover Features</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Cross-platform multiplayer battles</li>
                <li>Unique character collection system</li>
                <li>Regular events and rewards</li>
                <li>Active community and updates</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Available Platforms</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>iOS & Android versions of Arise Crossover</li>
                <li>PC version through Steam</li>
                <li>PlayStation 4/5 edition</li>
                <li>Xbox Series X|S version</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Arise Crossover</h3>
              <p className="text-gray-400">
                Your trusted source for Arise Crossover codes and updates.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-400">
                Email: tangjei@gmail.com
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <ul className="text-gray-400">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Resources</h3>
              <ul className="text-gray-400">
                <li>Arise Crossover Guide</li>
                <li>News & Updates</li>
                <li>Support</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Arise Crossover. All rights reserved. Created by tangjei</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

interface CodeCardProps {
  code: string;
  reward: string;
  isNew: boolean;
  onCopy: (code: string) => void;
  isCopied: boolean;
}

function CodeCard({ code, reward, isNew, onCopy, isCopied }: CodeCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="font-mono font-bold text-gray-900">{code}</span>
          {isNew && (
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
              NEW
            </span>
          )}
        </div>
        <button
          onClick={() => onCopy(code)}
          className="text-blue-600 hover:text-blue-700 transition-colors"
        >
          {isCopied ? (
            <CheckCircle2 className="w-5 h-5" />
          ) : (
            <Copy className="w-5 h-5" />
          )}
        </button>
      </div>
      <p className="text-gray-600">{reward}</p>
    </div>
  );
}

export default App;