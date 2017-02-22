class Payment < ApplicationRecord
  validates :amount, presence: true

  belongs_to :project
end
