class Project < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true
  validates :contact_email, presence: true
  before_create :normalize_name

  enum status: %w(in_progress completed)

  has_many :payments

  def normalize_name
    self.name = self.name.downcase
  end

  def check_status
    if self.amount_owed == 0
      self.update_attributes(status: 1)
    end
  end
end
