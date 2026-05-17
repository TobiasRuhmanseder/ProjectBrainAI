class Membership < ApplicationRecord
  belongs_to :user
  belongs_to :company

  enum :role, { user: "user", admin: "admin", projectmanager: "projectmanager",  owner: "owner" }

  validates :role, presence: true
end
