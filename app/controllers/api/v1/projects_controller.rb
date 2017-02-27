class Api::V1::ProjectsController < ApplicationController
  respond_to :json
  def show
    project = Project.find_by(name: params[:name])
    respond_with project
  end
end
