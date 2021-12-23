import Foundation

class Parrot {
    let baseSpeed: Double = 12.0

}

class EuropeanParrot: Parrot {
    var speed: Double {
        return baseSpeed
    }
}

class AfricanParrot: Parrot {

    let numberOfCoconuts: Int

    init(numberOfCoconuts: Int) {
        self.numberOfCoconuts = numberOfCoconuts
    }

    var speed: Double {
        let loadFactor: Double = 9.0
        let speedByFactor = loadFactor * Double(numberOfCoconuts)
        return max(0, baseSpeed - speedByFactor)
    }
}

class NorwegianBlueParrot: Parrot {

    let voltage: Double
    let isNailed: Bool
    let maximumSpeed: Double = 24.0

    init(voltage: Double, isNailed: Bool) {
        self.voltage = voltage
        self.isNailed = isNailed
    }

    var speed: Double {
        return (isNailed) ? 0 : baseSpeed(voltage: voltage)
    }
    
    private func baseSpeed(voltage: Double) -> Double {
        return min(maximumSpeed, voltage * baseSpeed)
    }
}
