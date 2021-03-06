# encoding: utf-8

# == Schema Information
#
# Table name: programs
#
#  id                :integer          not null, primary key
#  name              :string(255)
#  device_id         :integer
#  degree            :integer
#  duration_in_min   :integer
#  consumption_in_wh :integer
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Program < ActiveRecord::Base
  attr_accessible :consumption_in_wh, :degree, :duration_in_min, :name, :device_id
  #belongs_to :job
  belongs_to :device

 # def to_param
  #  [id, name.parameterize].join("-")
  #end

  def full_name_degree
    if degree
      "#{name}, #{degree}°"
    else
      "#{name}"
    end
  end
  
  def full_duration
    " (#{duration_in_min} Minuten)"
  end
end
