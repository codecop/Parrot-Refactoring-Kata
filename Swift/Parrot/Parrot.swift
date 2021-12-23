import Foundation

class Parrot {
    let numberOfCoconuts: Int
    let voltage: Double
    let isNailed: Bool
    let loadFactor: Double = 9.0
    let baseSpeed: Double = 12.0
    
    init(numberOfCoconuts: Int, voltage: Double, isNailed: Bool) {
        self.numberOfCoconuts = numberOfCoconuts
        self.voltage = voltage
        self.isNailed = isNailed
    }

}

class EuropeanParrot: Parrot {
    var speed: Double {
        return baseSpeed
    }
}

class AfricanParrot: Parrot {
    var speed: Double {
        return max(0, baseSpeed - loadFactor * Double(numberOfCoconuts))
    }
}

class NorwegianBlueParrot: Parrot {
    var speed: Double {
        return (isNailed) ? 0 : baseSpeed(voltage: voltage)
    }
    
    private func baseSpeed(voltage: Double) -> Double {
        return min(24.0, voltage * baseSpeed)
    }
}
