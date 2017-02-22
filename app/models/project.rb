class Project < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true
  before_create :normalize_name

  enum status: %w(pending accepted completed)

  has_many :payments

  def normalize_name
    self.name = self.name.downcase
  end
end
