# require 'rails_helper'
#
# RSpec.feature 'user sees homepage' do
#   describe 'homepage' do
#     scenario 'user visits root path and sees content' do
#       create(:project)
#       Project.create(name: 'Second Project', description: 'Another Project', url: 'example2.com')
#       visit root_path
#
#       expect(page).to have_content 'Dapper Codes'
#       expect(page).to have_content 'Project'
#       expect(page).to have_content 'Second Project'
#       expect(page).to have_content 'This is a project'
#       expect(page).to have_content 'Another Project'
#       expect(page).to have_link 'www.example.com'
#       expect(page).to have_link 'example2.com'
#     end
#   end
# end
