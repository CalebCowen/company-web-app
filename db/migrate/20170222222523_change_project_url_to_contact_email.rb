class ChangeProjectUrlToContactEmail < ActiveRecord::Migration[5.0]
  def change
    rename_column :projects, :url, :contact_email
  end
end
