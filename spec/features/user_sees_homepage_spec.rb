require 'rails_helper'

RSpec.feature 'user sees homepage' do
  describe 'homepage' do
    scenario 'user visits root path' do
      
      visit root_path

      expect(page).to have_content 'Dapper Codes'
    end
  end
end
