class AddCustomerIdToProjects < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :customer_id, :string
  end
end
