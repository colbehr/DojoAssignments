//
//  ViewController.swift
//  DropYell
//
//  Created by Colby Behrndt on 6/1/17.
//  Copyright © 2017 colbehr. All rights reserved.
//


import UIKit
import CoreMotion
import Darwin
import AVFoundation
class ViewController: UIViewController {
    let motionManager = CMMotionManager()
    var accel = 0.0
    var yell = NSURL(fileURLWithPath: Bundle.main.path(forResource: "yell", ofType: "wav")!)
    var yellDone = NSURL(fileURLWithPath: Bundle.main.path(forResource: "yellDone", ofType: "wav")!)
    var audioPlayer = AVAudioPlayer()
    var audioPlayer2 = AVAudioPlayer()
    var wasPlaying = false
    var stopYell = false
    func stopYelling(){
//        print("yellstop")
        self.audioPlayer.currentTime = 0
        //self.audioPlayer.stop()
        //self.audioPlayer2.play()
        self.wasPlaying = false
        self.stopYell = true
    }
    override func viewDidLoad() {
        super.viewDidLoad()
        do{
            audioPlayer = try AVAudioPlayer(contentsOf: yell as URL)
            audioPlayer2 = try AVAudioPlayer(contentsOf: yellDone as URL)
        } catch{
            print(error)
        }
        audioPlayer2.prepareToPlay()
        audioPlayer.prepareToPlay()
        motionManager.startDeviceMotionUpdates(to: OperationQueue.current!, withHandler: {
            (deviceMotion, error) -> Void in
            self.accel = sqrt(pow((deviceMotion?.userAcceleration.x)!,2) + pow((deviceMotion?.userAcceleration.y)!,2) + pow((deviceMotion?.userAcceleration.z)!,2))
            print("\(self.accel)")
//            print((deviceMotion?.gravity.z)!)
            if self.accel > 1.6 && self.audioPlayer2.isPlaying == false{
                self.audioPlayer.play()
                self.wasPlaying = true
            } else if self.wasPlaying == true{
                self.stopYelling()
            }
            if(self.stopYell == true && self.audioPlayer.isPlaying == false){
                self.audioPlayer2.play()
                self.stopYell = false
            }
            if self.audioPlayer.isPlaying == true{
                self.audioPlayer.volume = Float(self.accel/10+0.2)
            }
        })
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    
}
