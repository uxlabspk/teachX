import { useState } from "react";
import DashboardLayout from "../../components/dashboard/Layout";

const TeacherProfile = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [bio, setBio] = useState("Experienced software developer with 10+ years of teaching experience. Specializing in web development and modern frameworks.");
  const [hourlyRate, setHourlyRate] = useState("50");

  const [interests, setInterests] = useState([
    "React", "TypeScript", "Node.js", "Web Development", "System Design"
  ]);
  const [newInterest, setNewInterest] = useState("");

  const [experience, setExperience] = useState([
    { id: 1, title: "Senior Software Engineer", company: "Google", years: "2018 - Present" },
    { id: 2, title: "Frontend Developer", company: "Meta", years: "2015 - 2018" },
    { id: 3, title: "Teaching Assistant", company: "Stanford University", years: "2013 - 2015" },
  ]);
  const [newExpTitle, setNewExpTitle] = useState("");
  const [newExpCompany, setNewExpCompany] = useState("");
  const [newExpYears, setNewExpYears] = useState("");

  const handleAddInterest = () => {
    if (newInterest.trim() && !interests.includes(newInterest.trim())) {
      setInterests([...interests, newInterest.trim()]);
      setNewInterest("");
    }
  };

  const handleRemoveInterest = (interest: string) => {
    setInterests(interests.filter((i) => i !== interest));
  };

  const handleAddExperience = () => {
    if (newExpTitle && newExpCompany && newExpYears) {
      setExperience([
        ...experience,
        { id: Date.now(), title: newExpTitle, company: newExpCompany, years: newExpYears },
      ]);
      setNewExpTitle("");
      setNewExpCompany("");
      setNewExpYears("");
    }
  };

  const handleRemoveExperience = (id: number) => {
    setExperience(experience.filter((e) => e.id !== id));
  };

  return (
    <DashboardLayout role="teacher">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-black">Profile</h1>
        <p className="text-sm text-gray-500">Manage your profile and teaching information.</p>
      </div>

      <div className="max-w-2xl space-y-6">
        {/* Basic Info */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-sm font-semibold text-black mb-4">Basic Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-black focus:ring-0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-black focus:ring-0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={3}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-black focus:ring-0 resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Hourly rate ($)</label>
              <input
                type="number"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(e.target.value)}
                className="w-32 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-black focus:ring-0"
              />
            </div>
          </div>
        </div>

        {/* Interests / Skills */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-sm font-semibold text-black mb-4">Interests & Skills</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {interests.map((interest) => (
              <span
                key={interest}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs bg-gray-100 text-black rounded-md"
              >
                {interest}
                <button
                  onClick={() => handleRemoveInterest(interest)}
                  className="text-gray-400 hover:text-black"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={newInterest}
              onChange={(e) => setNewInterest(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddInterest()}
              placeholder="Add a skill or interest"
              className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-black focus:ring-0"
            />
            <button
              onClick={handleAddInterest}
              className="px-3 py-2 text-sm font-medium bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              Add
            </button>
          </div>
        </div>

        {/* Teaching Experience */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-sm font-semibold text-black mb-4">Teaching Experience</h2>
          <div className="space-y-3 mb-4">
            {experience.map((exp) => (
              <div key={exp.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-md">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-black">{exp.title}</p>
                  <p className="text-xs text-gray-500">{exp.company}</p>
                  <p className="text-xs text-gray-400">{exp.years}</p>
                </div>
                <button
                  onClick={() => handleRemoveExperience(exp.id)}
                  className="text-gray-400 hover:text-black p-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-2">
            <input
              type="text"
              value={newExpTitle}
              onChange={(e) => setNewExpTitle(e.target.value)}
              placeholder="Job title"
              className="px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-black focus:ring-0"
            />
            <input
              type="text"
              value={newExpCompany}
              onChange={(e) => setNewExpCompany(e.target.value)}
              placeholder="Company"
              className="px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-black focus:ring-0"
            />
            <input
              type="text"
              value={newExpYears}
              onChange={(e) => setNewExpYears(e.target.value)}
              placeholder="2018 - Present"
              className="px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-black focus:ring-0"
            />
          </div>
          <button
            onClick={handleAddExperience}
            className="px-3 py-2 text-sm font-medium border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Add experience
          </button>
        </div>

        {/* Save */}
        <div className="flex justify-end">
          <button className="px-5 py-2 text-sm font-medium bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
            Save changes
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TeacherProfile;
