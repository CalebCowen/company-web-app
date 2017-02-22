class Project < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true
  validates :url, presence: true

  enum status: %w(pending accepted completed)
end
