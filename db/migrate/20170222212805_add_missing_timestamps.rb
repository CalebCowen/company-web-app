class AddMissingTimestamps < ActiveRecord::Migration[5.0]
  def change
    add_timestamps :projects
    add_timestamps :payments
  end
end
