# frozen_string_literal: true

class DashboardController < InertiaController
  def index
    render inertia: "dashboard/index", props: {
      company: { name: "Demo Company A" },
      projects: [
        {
          id: 1,
          name: "Website Relaunch",
          status: "active",
          description: "Modernize marketing site, improve performance, and ship a clearer product story."
        },
        {
          id: 2,
          name: "AI Inbox",
          status: "planning",
          description: "Capture quick thoughts and route them into tasks, notes, or knowledge automatically."
        }
      ]
    }
  end
end
