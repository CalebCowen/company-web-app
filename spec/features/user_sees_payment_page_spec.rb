require 'rails_helper'

RSpec.feature 'user sees payment page' do
  describe 'payment page' do
    scenario 'user clicks the payment link and sees payment page' do
      visit root_path

      click_on 'Make a Payment'

      expect(current_path).to eq new_payment_path

      find_field 'payment[project_id]'
      find_field 'payment[amount]'

      expect(page).to have_button 'Make payment'
    end
  end
end
