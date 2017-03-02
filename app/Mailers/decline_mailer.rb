class DeclineMailer < ApplicationMailer
  default from: 'dappercoding@gmail.com'

  def decline_email(project, error)
    @project = project
    @error = error[:message]
    @project_name = project.name.split.map(&:capitalize).join(' ')
    mail(to: @project.contact_email, subject: "Problem with your payment for #{@project_name}")
  end
end
