class DeclineMailer < ApplicationMailer
  # default from: 'no-reply@dappercodes.com'

  def decline_email(project, error)
    @project = project
    @error = error[:message]
    mail(to: @project.contact_email, subject: "Problem with your payment for #{@project.name}")
  end
end
