import { useState } from "react";

export default function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    problem_description: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitLead = async (e) => {
    e.preventDefault();

    // Store in localStorage for now
    const existingSubmissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
    const newSubmission = {
      ...form,
      timestamp: new Date().toISOString(),
      id: Date.now()
    };
    existingSubmissions.push(newSubmission);
    localStorage.setItem('formSubmissions', JSON.stringify(existingSubmissions));

    // Also try the webhook (update URL later)
    try {
      const response = await fetch("https://hook.eu2.make.com/4ctc5nj5mxt24nlgf12u8rkmb3xqlp2w", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{
            name: form.name,
            email: form.email,
            company: form.company,
            industry: form.industry,
            problem_description: form.problem_description,
            timestamp: new Date().toISOString()
          }]
        })
      });

      if (!response.ok) {
        console.error('Webhook error:', response.status, response.statusText);
      } else {
        console.log('Webhook sent successfully');
      }
    } catch (error) {
      console.error('Webhook failed:', error.message);
      alert('Webhook not configured in Make.com. Data stored locally only.');
    }

    alert("Lead submitted successfully!");
  };

  return (
    <form onSubmit={submitLead} className="space-y-6">
      <div>
        <label htmlFor="name" className="block mb-2 text-sm font-medium">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email address"
          className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div>
        <label htmlFor="company" className="block mb-2 text-sm font-medium">
          Company Name
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Enter your company name"
          className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div>
        <label className="block mb-3 text-sm font-medium">
          Industry
        </label>
        <div className="grid grid-cols-2 gap-3">
          {["Retail", "Real Estate", "SME", "Services"].map((option) => (
            <label
              key={option}
              className={`flex items-center justify-center p-3 sm:p-4 rounded-md border cursor-pointer transition-all ${form.industry === option
                  ? "border-blue-600 bg-blue-50 text-blue-700 font-medium ring-1 ring-blue-600"
                  : "border-gray-200 hover:border-blue-400 hover:bg-gray-50"
                }`}
            >
              <input
                type="radio"
                name="industry"
                value={option}
                checked={form.industry === option}
                onChange={handleChange}
                className="sr-only"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="problem_description" className="block mb-2 text-sm font-medium">
          What would you like to automate? *
        </label>
        <textarea
          id="problem_description"
          name="problem_description"
          required
          rows={4}
          value={form.problem_description}
          onChange={handleChange}
          placeholder="Describe what processes you'd like to automate or improve..."
          className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-blue-600 px-8 py-4 text-white font-medium transition-colors hover:bg-blue-700"
      >
        Book Free Audit
      </button>
    </form>
  );
}
