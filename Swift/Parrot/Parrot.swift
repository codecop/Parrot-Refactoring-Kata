import Foundation

class Parrot {
    let baseSpeed: Double = 12.0
}

class EuropeanParrot: Parrot {
    var speed: Double {
        return baseSpeed
    }
}

enum RuntimeError: Error {
    case negativeCoconuts, negativeVoltage
}

class AfricanParrot: Parrot {

    let numberOfCoconuts: Int

    init(numberOfCoconuts: Int) throws {
        guard numberOfCoconuts >= 0 else { throw RuntimeError.negativeCoconuts }
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

    init(voltage: Double, isNailed: Bool) throws {
        guard voltage >= 0 else { throw RuntimeError.negativeVoltage }
        self.voltage = voltage
        self.isNailed = isNailed
    }

    var speed: Double {
        return (isNailed) ? 0 : baseSpeed(voltage: voltage)
    }
    
    private func baseSpeed(voltage: Double) -> Double {
        let speedByVoltage = voltage * baseSpeed
        return min(maximumSpeed, speedByVoltage)
    }
}
